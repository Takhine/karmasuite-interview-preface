import React from "react";
import { useGetFunds } from "../../hooks/useGetFunds";
import { useRouter } from "next/router";

interface FundDetailsProps { };

const FundDetails: React.FC<FundDetailsProps> = () => {
    const router = useRouter();
    const { data, isLoading } = useGetFunds(router.query.fundId as string);

    console.log({data})
    return (
        <div></div>
    );
};

FundDetails.displayName = "FundDetails";

export default FundDetails;