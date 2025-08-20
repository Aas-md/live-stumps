import './Button.css'

export default function Button({name,isActive,onClick}){

    return (
        <button className={isActive} onClick={onClick}>{name}</button>
    )
}