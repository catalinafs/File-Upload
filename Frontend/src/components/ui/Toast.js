import Swal from 'sweetalert2';

/**
 * Returns a SweetAlert Toast, a custom toast made with `SweetAlert2`.
 *
 * @returns A Toast.
 *
 * @param text - A string containing the text to be displayed in the toast.
 * @param icon - A string that contains the name of the icon that should be displayed in the alert, only supports 5 options.
 * @param styles - An optional object, through which styles can be passed to further customize the toast.
 *
 * @example
 *
 * Toast({
 *   text: 'Contraseña Incorrecta',
 *   icon: 'error',
 *   styles: {
 *     iconColor: 'red',
 *     color: 'white',
 *     background: '#252525',
 *   }
 * });
 *
**/

const Toast = ({ text, icon, styles }) => {
    Swal.fire({
        toast: true,
        titleText: text,
        icon: icon,
        background: '#252525',
        color: '#f8f8f8',
        position: 'bottom-start',
        timer: 2000,
        padding: '10px',
        allowEscapeKey: false,
        showConfirmButton: false,
        ...styles,
    });
}

export default Toast;
