import {Box, Typography} from "@mui/material";
type Props={
    id: number;
    name: string;
    description: string;
    nbCards: number;
}

const category = (props: Props): JSX.Element => {
    return (
        <Box className={"w-1/5 h-auto bg-white"}>
            <Typography >{props.name}</Typography>
            <Typography >{props.description}</Typography>
            <Typography >{props.nbCards}</Typography>
        </Box>
    );
};

export default category;
