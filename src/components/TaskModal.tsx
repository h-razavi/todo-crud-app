import React, { useState } from "react";
// use Dialog

type Props = {};

function TaskModal({}: Props) {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
    </div>
  );
}

export default TaskModal;
