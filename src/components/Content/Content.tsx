import React, {useCallback, useEffect, useState} from 'react';
import {ContentType} from '../types';
import axiosApi from '../../axiosApi';
import {enqueueSnackbar} from 'notistack';
import {Location, useLocation, useParams} from 'react-router-dom';


const Content: React.FC = () => {
  const {pageName} = useParams();
  const [content, setContent] = useState<ContentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const location: Location = useLocation();


  const fetchContent = useCallback(async () => {
    try {
      setIsLoading(true);

      if (location.pathname === '/') {
        const response = await axiosApi.get<ContentType | null>('/pages/home.json');
        if (response.data) {
          setContent(response.data);
        }
      } else {
        const response = await axiosApi.get<ContentType | null>(`/pages/${pageName}.json`);
        if (response.data) {
          setContent(response.data);
        }
      }
    } catch (error) {
      enqueueSnackbar('Error fetching content', {variant: 'error'});
    } finally {
      setIsLoading(false);
    }
  }, [pageName, location.pathname]);

  useEffect(() => {
    void fetchContent();
  }, [fetchContent]);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {content && (
        <div>
          <h2 className="text-center">{content.title}</h2>
          <p>{content.content}</p>
        </div>
      )}
    </>
  );
};

export default Content;