type UserProps = {
    firstName: string;
    lastName: string;
};

const CtypingProps: React.FC<UserProps> = ({ firstName, lastName }) => {
    return (
        <div>
            <div>
                <span>{firstName}</span>

                <span>{lastName}</span>
            </div>

        </div>
    )
}

export default CtypingProps
