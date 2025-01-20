import React from 'react'

function EntireForum() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="http://localhost:9080/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Apache Content"
      />
    </div>

  )
}

export default EntireForum