import React from 'react'

function Card({name,image,head1,head2,head3}) {
  return (
    <div>
      <div class="max-w-lg rounded overflow-hidden shadow-lg mb-32">
  <img class="w-full" src={image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-3xl mb-2">{name}</div>
    <p class="text-gray-700 text-base text-xl">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-6">{head1}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-6">{head2}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-6">{head3}</span>
  </div>
</div>
    </div>
  )
}

export default Card
