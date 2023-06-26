'use client';

import useCountries from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import { Listing, Reservation } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { use, useCallback } from 'react';

interface ListingCardProps {
    data: Listing;
    reservations?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservations,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser,
}) => {
    const router = useRouter();
    const { getByValue } = useCountries();

    const location = getByValue(data.locationValue);

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            
            if(disabled){
                return;
            }

            onAction?.(actionId);
        },[onAction, actionId, disabled]);

  return (
    <div>ListingCard</div>
  )
}

export default ListingCard