import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';
import ServerComponentCopy from './components/server-component-copy';

export default function Home() {
  console.log(headers());
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
        {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive} disabled>
          Not Active
        </StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
        <AddCompanyButton />
        <ServerComponent />
        <ClientComponent>
          <ServerComponentCopy />
        </ClientComponent>
      </main>
    </div>
  );
}
