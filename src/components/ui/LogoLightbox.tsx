import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

type LogoLightboxProps = {
  open: boolean;
  close: () => void;
};

export function LogoLightbox({ open, close }: LogoLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      plugins={[Zoom, Fullscreen, Captions]}
      slides={[
        {
          src: "/logo.jpg",
          width: 1280,
          height: 1280,
          alt: "AUTOSHINE DETAILING AND SPRAYPAINTING logo",
          title: "AUTOSHINE DETAILING AND SPRAYPAINTING",
          description:
            "838 Allemandsdrift D, Mbibane 0449, Mpumalanga · +27 66 296 8646",
        },
      ]}
      captions={{ showToggle: true }}
      styles={{
        root: {
          "--yarl__color_backdrop": "rgba(11, 15, 26, 0.95)",
          "--yarl__color_button": "#f0f4f8",
          "--yarl__color_button_active": "#00a8ff",
          "--yarl__button_background_color": "rgba(255, 255, 255, 0.08)",
        } as const,
      }}
    />
  );
}