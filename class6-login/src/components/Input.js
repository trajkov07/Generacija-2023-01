import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ tip, ime, pisiNesto, vrednost, pratiMiIzmeni, smeniTipNaPole, renderTextArea, changeField }) => {
    return (
        <p>
            {renderTextArea ?
                <textarea
                    value={vrednost}
                    onChange={pratiMiIzmeni}
                    rows={8}
                    cols={20}
                />
                :
                <input
                    type={tip}
                    name={ime}
                    placeholder={pisiNesto}
                    value={vrednost}
                    onChange={pratiMiIzmeni}
                />}
            {ime === "password" ? <button onClick={smeniTipNaPole} type='button' className='eye-button'>
                <i className={tip === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
            </button> : null}
            {ime === 'comment' ?
                <button className='eye-button' type='button' onClick={changeField}>
                    <i className={renderTextArea ? 'fa fa-comment-o' : 'fa fa-comments-o'}></i>
                </button> : null}
        </p>
    )
}

Input.propTypes = {
    tip: PropTypes.string.isRequired,
    ime: PropTypes.string,
    pisiNesto: PropTypes.string,
    vrednost: PropTypes.string.isRequired,
    pratiMiIzmeni: PropTypes.func.isRequired,
    smeniTipNaPole: PropTypes.func,
    renderTextArea: PropTypes.bool,
    changeField: PropTypes.func
}