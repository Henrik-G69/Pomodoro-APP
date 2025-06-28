export default function List({listClass,children,style}) {
  return (
    <div className={listClass} style={style}>
        {children}
    </div>
  )
}
