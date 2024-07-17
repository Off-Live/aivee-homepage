import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VideoModal({ isOpen, close }: { isOpen: boolean, close: () => void }) {
    return (
        <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="KKNCiRWd_j0"
            onClose={close}
        />
    );
}

export default VideoModal;