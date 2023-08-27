import { CSSProperties, useEffect, useRef, useState } from "react";

type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

interface ImageProps {
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  src: string;
  block?: boolean;
  alt?: string;
  width?: number;
  height?: number;
  mode: "cover" | "fill" | "contain";
  style?: CSSProperties;
}

let observer = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";

const onIntersection: IntersectionObserverCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

const Image = ({
  lazy = false,
  threshold = 0.5,
  placeholder,
  src,
  block = false,
  alt,
  width,
  height,
  mode,
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const imageStyle = {
    display: block ? "block" : "undefined",
    width,
    height,
    objectFit: mode,
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);

    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observer = new IntersectionObserver(onIntersection, { threshold });
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
    />
  );
};

export default Image;
