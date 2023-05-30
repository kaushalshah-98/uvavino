import Image from 'next/image';
import { useRouter } from 'next/router';
import { API } from '~/store-api';

const RobotView = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, isFetching, data, error } = API.robotApi.useGetRobotsByIdQuery(
    { id: id as string },
    { skip: !id }
  );

  if (error) {
    return <p>Oh no, there was an error</p>;
  }

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  if (data) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='text-center border border-gray-300'>
          <Image
            src={`https://robohash.org/${data.id}?set=set2&size=180x180`}
            alt={data.name}
            width={180}
            height={180}
          />
          <h3>{data.name}</h3>
          <h3>{data.email}</h3>
          <h3>{data.phone}</h3>
          <h3>{data.username}</h3>
          <h3>{data.company.name}</h3>
        </div>
      </div>
    );
  }
  return null;
};

export default RobotView;
