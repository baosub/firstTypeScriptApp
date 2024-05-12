interface MyButtonProps {
    /** El texto que se mostrará dentro del botón */
    title: string;
    /** Si se puede interactuar con el botón */
    disabled: boolean;
}

const BdisabledButton = ({ title, disabled }: MyButtonProps) => {
    return (
        <>
            <h2>A disabled button</h2>
            <button disabled={disabled}>{title}</button>

        </>
    )
}

export default BdisabledButton
