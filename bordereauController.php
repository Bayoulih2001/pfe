<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBordereau;
use App\Http\Requests\UpdateBordereau;
use App\Http\Resources\BordereauResource;
use App\Models\Bordereau;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class bordereauController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        return BordereauResource::collection(
            Bordereau::where('user_id',$user->id)
            ->orderBy('created_at','desc')
            ->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateBordereau  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateBordereau $request)
    {
        //$data = $request->validated();

        if (isset($data['folder'])){
           $relativePath = $this->saveFolder($data['folder']);
           $data['folder'] = $relativePath;
        }

        $bordereau = Bordereau::create($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @param  \App\Models\Bordereau $bordereau
     * @return \Illuminate\Http\Response
     */
    public function show(Bordereau $bordereau, $request)
    {
        $user = $request->user();
        if ($user->id !== $bordereau->user_id) {
            return abort(403, 'Unauthorized action');
        }
        return new BordereauResource($bordereau);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBorderau  $request
     * @param  \App\Models\Bordereau  $bordereau
     * @return \Illuminate\Http\Response
     */

    public function update(UpdateBordereau $request, Bordereau $bordereau)
    {
        $data = $request->validated();

        // Check if folder was given and save on local file system
        if (isset($data['folder'])) {
            $relativePath = $this->saveFolder($data['folder']);
            $data['folder'] = $relativePath;

            // If there is an old folder, delete it
            if ($bordereau->folder) {
                $absolutePath = public_path($bordereau->folder);
                File::delete($absolutePath);
            }
        }

        // Update bordereau in the database
        $bordereau->update($data);
        return new BordereauResource($bordereau);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bordereau  $bordereau
     * @return \Illuminate\Http\Response
     */

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    public function destroy(Bordereau $bordereau, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $bordereau->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $bordereau->delete();

        // If there is an old folder, delete it
        if ($bordereau->folder) {
            $absolutePath = public_path($bordereau->folder);
            File::delete($absolutePath);
        }

        return response('', 204);
    }

    
    private function saveFolder($folder) 
   {
      if (preg_match('/^data:folder\/(\w+);base64,/', $folder, $type)) {
        $folder = substr($folder, strpos($folder, ',') +1);

        $type = strtolower($type[1]);
        
        if (!in_array($type, ['pdf', 'docx'])) {
            throw new \Exception('invalid folder type');

        }
        $folder = str_replace(' ', '+', $folder);
            $folder = base64_decode($folder);

            if ($folder === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with folder data');
        }

        $dir = 'folder/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $folder);

        return $relativePath;
      }
}


