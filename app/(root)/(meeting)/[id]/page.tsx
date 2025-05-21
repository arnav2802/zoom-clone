import React from 'react'

export default async function Meeting({ params }: { params: { id: string } }) {
  const { id } = params; // Ensure params is awaited

  return <div>Meeting Room: #{id}</div>;
}