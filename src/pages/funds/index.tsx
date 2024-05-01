import React from "react";
import { useGetFunds } from "../../hooks/useGetFunds";

interface FundsProps { };

const Funds: React.FC<FundsProps> = () => {
    const {data, isLoading} = useGetFunds();

    console.log({data})
    return (
        <div>Funds</div>
    );
};


Funds.displayName = "Funds";

export default Funds;