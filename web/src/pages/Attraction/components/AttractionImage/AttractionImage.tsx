import styles from './AttractionImage.module.css';

interface AttractionImageProps {
  src: string;
  alt: string;
}

export const AttractionImage = ({ src, alt }: AttractionImageProps) => (
  <div className={styles.imageContainer}>
    <img src={src} alt={alt} className={styles.image} />
  </div>
);
