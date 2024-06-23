export const BookingForm = () => {
  return (
    <div>
      <h1>Objednat se</h1>
      <form>
        <input type='text' placeholder='Křestní jméno' />
        <input type='text' placeholder='Příjmení' />

        <div>
          <label htmlFor='sluzby'>Vyberte službu:</label>
          <select name='sluzby' id='sluzby'>
            <option value='blabla'>sluzba 1</option>
            <option value='blabla'>sluzba 2</option>
            <option value='blabla'>sluzba 3</option>
          </select>
        </div>

        <input type='date' />
      </form>
    </div>
  );
};
