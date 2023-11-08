export const MyComponent = ({
  textColour,
  bgColour,
}: {
  textColour: string;
  bgColour: string;
}) => (
  <div
    style={{ color: textColour, backgroundColor: bgColour, padding: "24px" }}
  >
    Hello World!
  </div>
);
