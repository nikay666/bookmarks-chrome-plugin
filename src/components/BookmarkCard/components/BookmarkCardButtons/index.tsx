import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledIconButton, StyledStack } from "./styles";

export interface Props {
  className?: string;
  onEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BookmarkCardButtons: React.FC<Props> = ({
  className,
  onEdit,
  onDelete,
}) => {
  const editHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("EDIT", e);
    onEdit?.(e);
  };
  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("DELETE", e);
    onDelete?.(e);
  };

  return (
    <StyledStack
      {...{
        direction: "row",
        justifyContent: "space-between",
        alignItems: 'end',
        spacing: 32,
      }}
    >
      <StyledIconButton
        {...{
          size: "small",
          "aria-label": "Edit",
          onClick: editHandler,
        }}
      >
        <EditIcon fontSize="inherit" />
      </StyledIconButton>
      <StyledIconButton
        {...{
          size: "small",
          "aria-label": "Delete",
          onClick: deleteHandler,
        }}
      >
        <DeleteIcon fontSize="inherit" />
      </StyledIconButton>
    </StyledStack>
  );
};

export default BookmarkCardButtons;
