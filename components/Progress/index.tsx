import { Container } from './styles';

type ProgressProps = {
  label: string;
  progress: number;
};

const Progress = ({ label, progress }: ProgressProps) => (
  <Container width={progress}>
    <strong>{label}</strong>

    <div className="progress" />
  </Container>
);

export default Progress;
