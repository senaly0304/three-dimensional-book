export default function Home() {
  return (
    <main className='min-h-dvh grid place-content-center bg-white'>
      <div className='[perspective:1000px] group'>
        <div className='group w-80 transision duration-1000 group-hover:[transform:translateX(15%)_rotateX(10deg)] aspect-[3/4] [transform-style:preserve-3d] [transform:rotateX(40deg)] relative'>
          <div className='text-center pt-20 [transform-style:preserve-3d] group-hover:[transform:rotateY(-160deg)] origin-left transision duration-1000 absolute inset-0 bg-zinc-800 text-white p-6 font-bold text-3xl'>
            <div className='[transform:translateZ(1px)] bg-zinc-800 absolute inset-0' />
            <h1 className='[transform:translateZ(1px)]'>Sena Kobayashi</h1>
          </div>
          <div className='absolute w-5 bg-zinc-800 inset-y-0 left-0 origin-left [transform:rotateY(90deg)]' />
          <div className='bg-white p-6 border absolute [transform-style:preserve-3d] inset-y-4 left-0 right-4 [transform:translateZ(-1px)] '>
            <p className='text-black mb-3 font-bold'>Sena Kobayashi</p>
            <p className='text-black mb-1'>▪ 関西大学 システム理工学部 物理・応用物理学科 物性理論研究室/本多研卒業 (2024)</p>
            <p className='text-black mb-1'>▪ 卒業論文: 強磁性層多層膜におけるスピンホール効果を介したスピン注入</p>
            <p className='text-black'>▪ 執筆論文: <a className='underline underline-offset-2' href='https://kansai-u.repo.nii.ac.jp/records/2001438'>Spin Current for Spin-Orbit Torque in Magnetoresistance Structure</a></p>
            <div className='w-full h-5 [tramsform:rotateX(90deg)] origin-bottom bg-white border absolute bottom-0 inset-x-0' />
          </div>
          <div className='absolute [transform:translateZ(-20px)] inset-0 bg-zinc-800 text-white p-6 font-bold text-3xl' />
        </div>
      </div>
    </main>
  );
}
