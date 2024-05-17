

export default function HiddenComponent({ selectedOption }){
  if (!selectedOption) return null;

  return (
    <div >
      <br/>
      {/* Here goes the content of your hidden component */}
       {selectedOption}
    </div>
  );
}