"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div>
      <Modal title="test" description="Test desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
