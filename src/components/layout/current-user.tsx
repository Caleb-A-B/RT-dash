import { Popover, Button } from 'antd';

const CurrentUser = () => {
  return (
    <>
        <Popover
        placement='bottomRight'
        trigger="click"
        overlayInnerStyle={{ padding: 0}}
        overlayStyle={{ zIndex: 999}}
        >
            schrodingers cat
        </Popover>
    </>
  )
}

export default CurrentUser