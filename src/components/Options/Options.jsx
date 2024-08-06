import css from "./Options.module.css"

const Options = ({updateFeedback, resetFeedback, totalFeedback, feedback}) => {
  console.log(feedback);
  return (
    <div className={css.buttonsWrap}>
{feedback.map((item, index) => (
      <button key={index}
      style={{textTransform: 'capitalize'}}
      onClick={()=>updateFeedback(item)}  type="button">{item}</button>

))}

     
     {totalFeedback>0 && <button onClick={resetFeedback}
      type="button">Reset</button>}
    </div>
  )
}

export default Options