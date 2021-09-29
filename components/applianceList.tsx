import ApplianceCard, { Appliance } from './appliance';

interface ApplianceListProps {
  appliances: Appliance[];
}

export default function ApplianceList(props: ApplianceListProps) {
  return (
    <div className='appliance-list'>
      {props.appliances.map((appliance, index) => (
        <ApplianceCard appliance={appliance} key={index} />
      ))}
    </div>
  );
}
