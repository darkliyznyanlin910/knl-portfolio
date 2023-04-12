interface Props {
  props: {
    element: React.ReactNode;
    type: "work" | "star";
  }[];
}

export function Timeline({ props }: Props) {
  return (
    <div className="w-full">
      <ul className="steps steps-vertical">
        {props.map((prop, index) => (
          <li className={`step step-${prop.type}`} key={index}>
            <div className="pl-4">{prop.element}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
