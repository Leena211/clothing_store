import React from 'react';

const OrderTimeline = ({ deliveryStatus, deliveryUpdates }) => {
  const statuses = ['Pending', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  const currentIndex = statuses.indexOf(deliveryStatus);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '30px' }}>Delivery Status: {deliveryStatus}</h2>
      <div style={{ position: 'relative' }}>
        {statuses.map((status, index) => {
          const isCompleted = index <= currentIndex;
          const update = deliveryUpdates?.find(u => u.status === status);
          
          return (
            <div key={status} style={{ 
              display: 'flex', 
              marginBottom: '30px',
              position: 'relative'
            }}>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: isCompleted ? '#28a745' : '#ddd',
                border: '3px solid',
                borderColor: isCompleted ? '#28a745' : '#ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: isCompleted ? 'white' : '#999',
                marginRight: '20px',
                flexShrink: 0
              }}>
                {isCompleted ? '✓' : index + 1}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  color: isCompleted ? '#333' : '#999',
                  marginBottom: '5px'
                }}>
                  {status}
                </h3>
                {update && (
                  <p style={{ color: '#666', fontSize: '14px' }}>
                    Updated: {new Date(update.updatedAt).toLocaleString()}
                  </p>
                )}
              </div>
              {index < statuses.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '14px',
                  top: '30px',
                  width: '2px',
                  height: '30px',
                  backgroundColor: index < currentIndex ? '#28a745' : '#ddd'
                }} />
              )}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3>Update History</h3>
        {deliveryUpdates && deliveryUpdates.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {deliveryUpdates.map((update, index) => (
              <li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <strong>{update.status}</strong> - {new Date(update.updatedAt).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No updates yet.</p>
        )}
      </div>
    </div>
  );
};

export default OrderTimeline;

