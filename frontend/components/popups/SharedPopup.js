export const iconMail = { iconName: 'Mail' }
export const iconUser = { iconName: 'Contact' }
export const iconPass = { iconName: 'PasswordField' }
export const forgotIcon = { iconName: 'Permissions' };
export const backIcon = { iconName: 'Back' }
export const moneyIcon = { iconName: 'Money' }
export const titleIcon = { iconName: 'GripperBarHorizontal' }
export const emailNotValid = (email) => {
    return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}