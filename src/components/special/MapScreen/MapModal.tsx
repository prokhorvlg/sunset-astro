// import Modal from "react-modal"
import "./MapModal.scss"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, ReactNode, useRef } from "react"
import { IoClose } from "react-icons/io5"

const MapModal = ({
  children,
  hasHeader = true,
  headerText,
  headerIcon,
  isOpen,
  setIsOpen,
  desiredWidth,
  closeButtonContent = <><IoClose /> Close</>
}: {
  children: any
  hasHeader?: boolean
  headerText?: string
  headerIcon?: any
  isOpen: boolean
  setIsOpen: Function
  desiredWidth?: number // What is the desired internal width of this modal
  closeButtonContent?: ReactNode
}) => {
  let completeButtonRef = useRef(null)
  
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={completeButtonRef}
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
          <div className="map-panel-container" style={{
            width: desiredWidth ? desiredWidth : undefined
          }}
          >
            {hasHeader &&
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
            }

            <Dialog.Panel className={`map-dialog-content ${hasHeader ? "has-header" : "no-header"}`}>
              <div className="content-child">{children}</div>
            </Dialog.Panel>

            <div className="map-dialog-footer">
              <button onClick={onClose} ref={completeButtonRef}>{closeButtonContent}</button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default MapModal
