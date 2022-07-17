import { createContext, useState } from "react";

const UserContext = createContext({ user: {}, auth: false });

export default UserContext;
