import { createContext, useState } from "react";


const NavContext = createContext({
    is_active: false,
    left_position: '',
    toggle_nav: () => {}
});

export function NavContextProvider(props) {

    const [right, set_right] = useState('-100%');
    const [active, set_active] = useState(false);

    function open() {
        set_right('0');
        set_active(true);
    }

    function close() {
        set_right('-100%');
        set_active(false);
    }

    function toggle () {
        if (active){
            close();
        }  
        else {
            open();
        }    
    }

    const context = {
        is_active: active,
        right_position: right,
        toggle_nav: toggle,
        close_nav: close
    }

    
    return (
        <NavContext.Provider value={context}>
            {props.children}
        </NavContext.Provider>
    );
}

export default NavContext;