import './PasswordCheckList.css'

export default function PasswordCheckList(){
    return(
        <div className="ckecklist-container">
            <ul className="list-items">
                <li>Password should contain 6-20 characters</li>
                <li>Password should contain atleast one lowercase character</li>
                <li>Password should contain atleast one uppercase character</li>
                <li>Password should contain atleast one number</li>
                <li>Password should contain atleast one special character</li>
                <li>Password should not contain three consecutive repeating character</li>
            </ul>
        </div>
    );
}