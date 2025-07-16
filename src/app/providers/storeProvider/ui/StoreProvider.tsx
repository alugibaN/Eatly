import React, { ReactNode } from "react"
import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../index";

 interface StoreProviderProps {
 children?: ReactNode;
 initialState?: StateSchema;
}


const StoreProvider = (props: StoreProviderProps) => {
  const {children, initialState} = props 

const store = createReduxStore(initialState)


  return (
     <Provider store={store}>
      {children}
    </Provider>
  )
};

export default StoreProvider;
