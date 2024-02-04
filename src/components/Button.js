export default function Button({ isDisabled, children, actionType, eventHandler, isSuccess}) {

    // Action type can be: submit, delete, or undefined

    // Classes
    const disabledOrIdleClass = isDisabled ? "disabledStyle" : "idleStyle";
    const dangerClass = actionType === "delete" ? "dangerButton" : '';
    const submitClass = actionType === "submit" ? "specialButton" : '';

    // Button type
    const buttonType = actionType === "submit" ? "submit" : "button";

    // Event handler
    const onClick = eventHandler ? eventHandler : undefined;

    // Checkmark and animation
    const checkmark = isSuccess && <span className="success-animation"> &#x2714;</span>;
    
    return (
        <button 
            className={`bigButton 
            ${disabledOrIdleClass} 
            ${dangerClass} 
            ${submitClass}`}
            type={buttonType} 
            disabled={isDisabled} 
            onClick={onClick}
        >
            {children} 
            {checkmark}
        </button>
    );
}