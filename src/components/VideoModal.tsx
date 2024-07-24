import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VideoModal({ isOpen, close }: { isOpen: boolean, close: () => void }) {
    return (
        <ModalVideo
            channel="custom"
            isOpen={isOpen}
            url="/aivee_intro.mp4"
            onClose={close}
            ratio="4:3"
        />
    );
}

export default VideoModal;