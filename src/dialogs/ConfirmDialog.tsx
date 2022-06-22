import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { PropsWithChildren } from "react";

type ConfirmDialogProps = {
  isOpen: boolean,
  onConfirm: (confirmed: boolean) => void,
  message?: string,
  title?: string;
}

export function AppConfirmDialog(props: PropsWithChildren<ConfirmDialogProps>) {
    const isOpen = props.isOpen || false;

    return (
        <Dialog open={isOpen} keepMounted onClose={() => props.onConfirm(false)}>
        <DialogTitle>{props.title ? props.title : "Confirm action"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
              {props.message ? props.message : "Please confirm your action by clicking proceed."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.onConfirm(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => props.onConfirm(true)}>Proceed</Button>
        </DialogActions>
      </Dialog>
    );
}