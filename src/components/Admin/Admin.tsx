import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ContentType} from '../types';
import axiosApi from '../../axiosApi';
import {enqueueSnackbar} from 'notistack';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [page, setPage] = useState<ContentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPages = useCallback(async () => {
    if (!selected) return;

    try {
      setIsLoading(true);
      const {data} = await axiosApi.get<ContentType | null>(`/pages/${selected}.json`);
      setPage(data);
    } catch (error) {
      console.error('Error fetching page data:', error);
      enqueueSnackbar('Error fetching pages data', {variant: 'error'});
    } finally {
      setIsLoading(false);
    }
  }, [selected]);

  useEffect(() => {
    void fetchPages();
  }, [selected, fetchPages]);

  const onPageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageName = event.target.value;
    setSelected(pageName);
  };

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setPage(prev => {
      if (prev) {
        return {
          ...prev, [name]: value,
        };
      }
      return prev;
    });
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected || !page) return;

    try {
      setIsLoading(true);
      await axiosApi.put(`/pages/${selected}.json`, page);
      enqueueSnackbar('Page edited', {variant: 'success'});
      navigate(`/pages/${selected}`);
    } catch (error) {
      console.error('Error saving page data:', error);
      enqueueSnackbar('Something went wrong', {variant: 'error'});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <form className="row flex-column align-items-center text-center g-3 needs-validation mt-5"
            onSubmit={onFormSubmit}>
        <h4>Edit Page</h4>
        <div className="col-md-4 position-relative d-flex flex-column align-items-center text-center">
          <label className="form-label">Select Page</label>
          <div className="input-group">
            <select className="form-select" value={selected} onChange={onPageSelect}>
              <option value="">Select a page...</option>
              <option value="home">Home</option>
              <option value="about">About</option>
              <option value="contacts">Contacts</option>
              <option value="divisions">Divisions</option>
              <option value="social">Social</option>
            </select>
          </div>
          {page && (
            <>
              <label className="form-label">Title</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={page.title}
                  onChange={onFieldChange}
                  required
                />
              </div>
              <label className="form-label">Content</label>
              <div className="input-group">
                <span className="input-group-text">Content</span>
                <textarea
                  className="form-control"
                  name="content"
                  value={page.content}
                  onChange={onFieldChange}
                  required
                />
              </div>
            </>
          )}
        </div>
        <div className="col-12">
          <button className="btn btn-info text-white" type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default Admin;