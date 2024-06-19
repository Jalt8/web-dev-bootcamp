import Die from './Die'

function Dice({dice, color}) {
    return(
        <section className="Lucky7-dice">
        {dice.map((die, i) => (
          <Die key={i} die={die} color={color}/>
        ))}
      </section>
    )
}

export default Dice