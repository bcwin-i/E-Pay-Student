//import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
//import { useAuthState } from "../../firebase";
import { Popupmenu, MenuList, ListIconSignin } from "./popupMenuStyles";
//import { getDatabase, ref, child, get } from "firebase/database";

const PopoverNavMenu = () => {
  //const { isAuthenticated, setUser } = useAuthState();
  //const [username, setUsername] = useState(isAuthenticated?.email);

  // const handleSignout = () => {
  //   signOut(getAuth())
  //     .then((e) => {
  //       console.info("Logout: ", e);
  //       //setUser();
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // };

  // useEffect(() => {
  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `users/${isAuthenticated?.uid}`))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         setUsername(snapshot.val().LastName);
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       //console.error(error);
  //     });
  // }, []);

  return (
    <Popupmenu>
      <MenuList to="getStarted" smooth={true} duration={500}>
        Sign in <ListIconSignin size={18} color={3} />
      </MenuList>
      {/* <MenuList>Sign up<ListIconSignup/></MenuList> */}
      <MenuList to="about" smooth={true} duration={500}>
        About
      </MenuList>
      <MenuList to="footer" smooth={true} duration={500}>
        Contact
      </MenuList>
    </Popupmenu>
  );
};

export default PopoverNavMenu;
