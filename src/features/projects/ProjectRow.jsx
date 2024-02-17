import React, { useState } from 'react'
import trancateText from '../../utils/trancateText'
import { toPersianNumbersWithComma } from '../../utils/toPersianNumber'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useRemoveProject } from './useRemoveProject';

function ProjectRow({ project, index }) {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isRemoveOpen, setIsRemoveOpen] = useState(false)
    const { isDeletting, removeProject } = useRemoveProject()

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{trancateText(project.title, 30)}</td>
            <td>{project.category.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td>
                <div className='flex flex-wrap  items-center gap-1 max-w-[150px] '>
                    {project.tags.map(tag => <span className='badge badge--secondary' key={tag}>{tag}</span>)}
                </div>
            </td>
            <td>{project.freelancer?.name || "-"}</td>
            <td>{project.status === "OPEN" ? <span className='badge badge--success'>باز</span> :
                <span className='badge badge--danger'>بسته</span>}</td>
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                        <button onClick={() => setIsEditOpen(true)}>
                            <TbPencilMinus className='w-5 h-5 text-primary-900' />
                        </button>
                        <Modal open={isEditOpen} title="مودال" onClose={() => setIsEditOpen(false)} >
                            this is modal
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsRemoveOpen(true)}>
                            <HiOutlineTrash className='w-5 h-5 text-error' />
                        </button>
                        <Modal open={isRemoveOpen} title={`حدف ${project.title}`} onClose={() => setIsRemoveOpen(false)} >
                            <ConfirmDelete
                                resourceName={project.title}
                                onConfirm={() => removeProject(project._id, { onSuccess: () => setIsRemoveOpen(false) })}
                                onClose={() => setIsRemoveOpen(false)}
                                disabled={false}
                            />
                        </Modal>
                    </>
                </div>
            </td>
        </tr>
    )
}

export default ProjectRow