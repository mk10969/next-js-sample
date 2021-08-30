import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Paragraph(props: Props) {
  return (
    <p>
      {props.children}
      <style jsx>{`
        p {
          font: 13px Helvetica, Arial;
          margin: 10px 0;
        }
      `}</style>
    </p>
  );
}
