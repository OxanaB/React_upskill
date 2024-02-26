import React from 'react';
import { Button } from '../../shared/Button/Button';

interface UserTagsProps {
  tags: string[] | string;
}

export const UserTags = ({ tags }: UserTagsProps) => (
  <>
    {tags && Array.isArray(tags) && (
      <div className="defaultpage__inner-block defaultpage__leftblock">
        <div className="userpage__leftblock-tags">
          {tags.map((tag: string, i: number) => (
            <Button key={i + tag} btnTheme="btn-small" btnColor="soft">
              {tag}
            </Button>
          ))}
        </div>
      </div>
    )}
  </>
);
