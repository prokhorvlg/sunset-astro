// import Modal from "react-modal"
import "./MapModal.scss"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { IoClose } from "react-icons/io5"

const MapModal = ({
  children,
  headerText,
  headerIcon,
  isOpen,
  setIsOpen,
}: {
  children: any
  headerText?: string
  headerIcon?: any
  isOpen: boolean
  setIsOpen: Function
}) => {
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="map-dialog"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="tw-ease-out tw-duration-200"
          enterFrom="tw-opacity-0"
          enterTo="tw-opacity-100"
          leave="tw-ease-in tw-duration-200"
          leaveFrom="tw-opacity-100"
          leaveTo="tw-opacity-0"
        >
          <div className="map-overlay" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="tw-ease-out tw-duration-200"
          enterFrom="tw-opacity-0 tw-scale-95"
          enterTo="tw-opacity-100 tw-scale-100"
          leave="tw-ease-in tw-duration-100"
          leaveFrom="tw-opacity-100 tw-scale-100"
          leaveTo="tw-opacity-0 tw-scale-95"
        >
          <div className="map-panel-container">
            <div className="map-dialog-header">
              <h2>
                {headerIcon}
                {headerText}
              </h2>
              <div className="map-header-diagonal"></div>
              <button className="close" onClick={onClose}>
                <IoClose />
              </button>
            </div>

            <Dialog.Panel className="map-dialog-content">
              <div className="content-child">{children}</div>
            </Dialog.Panel>

            <div className="map-dialog-footer">
              <button>close</button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default MapModal
