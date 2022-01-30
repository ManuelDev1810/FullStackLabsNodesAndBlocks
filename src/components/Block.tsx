import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Block from "../models/Block";

type Props = {
  blocks: Block[];
  loading: boolean;
};

const DivCool = styled(Box)({
  width: "100%",
  backgroundColor: "#E0E0E0",
  paddingLeft: 10,
  paddingTop: 10,
  borderRadius: "5px",
  fontSize: 12,
});

const SpanCool = styled(Typography)({
  fontSize: 12,
  display: "block",
  color: "#304FFE",
  lineHeight: 1,
});

const Node: React.FC<Props> = ({ blocks, loading }) => {
  const blockContent = () => {
    if (blocks && blocks.length > 0) {
      return blocks.map((block) => {
        return (
          <DivCool>
            <SpanCool>00{block.id}</SpanCool>
            <p>{block.attributes.data}</p>
          </DivCool>
        );
      });
    } else if (loading) {
        return <p>Loading</p>
    } else {
      return <p>No blocks found</p>;
    }
  };

  return (<>{blockContent()}</>);
};

export default Node;
