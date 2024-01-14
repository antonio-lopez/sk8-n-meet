interface ImageProps {
  largeImg: string;
  smallImg: string;
  height: string;
  width: string;
  sizes: string;
  loading: "eager" | "lazy" | undefined;
  alt: string;
  className?: string;
}

const Image = ({
  largeImg,
  smallImg,
  sizes,
  height,
  width,
  loading,
  alt,
  className,
}: ImageProps) => (
  <picture>
    <source
      type='image/webp'
      srcSet={`${smallImg} 600w, ${largeImg} 1000w`}
      sizes={sizes}
    />

    <img
      src={smallImg}
      loading={loading}
      height={height}
      width={width}
      alt={alt}
      className={className}
    />
  </picture>
);

export default Image;
