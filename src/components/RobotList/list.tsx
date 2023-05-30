import Image from 'next/image';
import Link from 'next/link';
import { API } from '~/store-api';

const Robotlist = () => {
  const { isLoading, isFetching, data, error } = API.robotApi.useGetRobotsQuery(null);

  if (error) {
    return <p>Oh no, there was an error</p>;
  }

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  if (data) {
    return (
      <div className='grid grid-cols-4 gap-5'>
        {data.map((robot) => (
          <Link href={`/robot/${robot.id}`} key={robot.id}>
            <div className='text-center border border-gray-300'>
              <Image
                src={`https://robohash.org/${robot.id}?set=set2&size=180x180`}
                alt={robot.name}
                width={180}
                height={180}
              />
              <h3>{robot.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }
  return null;
};

export { Robotlist };
