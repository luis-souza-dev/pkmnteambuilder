import * as React from 'react';

export function MainSection ({ children }: React.PropsWithChildren) {
  return (
    <section className='w-100 h-[calc(100vh-100px)] '>
        <div className="w-10/12 mx-auto h-[100%]  bg-green-900 bg-opacity-10 backdrop-blur-lg">
            { children }
        </div>
    </section>
  );
}
